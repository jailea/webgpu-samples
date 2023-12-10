import { mat4, vec3, vec2, vec4 } from 'wgpu-matrix';
import { radiansToDegrees } from '../../meshes/utils';

interface SimulationCS {
  MeasurementAltitude: number;
  TSnowA: number;
  TSnowB: number;
  TMeltA: number;
  TMeltB: number;
  k_e: number;
  k_m: number;
}

const SimulationCSConstants: SimulationCS = {
  MeasurementAltitude: 0.0,
  TSnowA: 0.0,
  TSnowB: 2.0,
  TMeltA: -5.0,
  TMeltB: -2.0,
  k_e: 0.2,
  k_m: 4.0,
};

interface SimParams {
  deltaTime: number;
  seed: [number, number, number, number];
  Temperature: number;
  Precipitation: number;
  HourOfDay: number;
  DayOfYear: number;
}

const sim_params: SimParams = {
  deltaTime: 0, // Assign your actual value here
  seed: [Math.random() * 100, Math.random() * 100, 1 + Math.random(), 1 + Math.random()], // Assign your actual values here
  Temperature: -1.0, // Assign your actual value here
  Precipitation: 1.0, // Assign your actual value here
  HourOfDay: 0, // Assign your actual value here
  DayOfYear: 0, // Assign your actual value here
};

interface SimulationCSVar {
  Timesteps: number;
  CurrentSimulationStep: number;
  HourOfDay: number;
  DayOfYear: number;
}

const SimulationCSVariables: SimulationCSVar = {
  Timesteps: 0,
  CurrentSimulationStep: 0,
  HourOfDay: 12,
  DayOfYear: 0,
};

let rand_seed = vec2.create();

function Func2(L: number, D: number) : number {
    return Math.acos(Math.min(Math.max(-Math.tan(L) * Math.tan(D), -1.0), 1.0));
}

function Func3(V: number, W: number, X: number, Y: number, R1: number, D: number) : number {
    return R1 * (Math.sin(D) * Math.sin(W) * (X - Y) * (12.0 / Math.PI) +
                 Math.cos(D) * Math.cos(W) * (Math.sin(X + V) - Math.sin(Y + V)) * (12.0 / Math.PI));
}

function SolarRadiationIndex(I: number, A: number, L0: number, J: number){
    var L1: number = Math.acos(Math.cos(I) * Math.sin(L0) + Math.sin(I) * Math.cos(L0) * Math.cos(A));
    var D1: number = Math.cos(I) * Math.cos(L0) - Math.sin(I) * Math.sin(L0) * Math.cos(A);
    var L2: number = Math.atan(Math.sin(I) * Math.sin(A) / (Math.cos(I) * Math.cos(L0) - Math.sin(I) * Math.sin(L0) * Math.cos(A)));

    var D: number = 0.007 - 0.4067 * Math.cos((J + 10.0) * 0.0172);
    var E: number = 1.0 - 0.0167 * Math.cos((J - 3.0) * 0.0172);

    let R0: number = 1.95;
    var R1: number = 60.0 * R0 / (E * E);

    var T: number;
    T = Func2(L1, D);
    var T7: number = T - L2;
    var T6: number = -T - L2;
    T = Func2(L0, D);
    var T1: number = T;
    var T0: number = -T;
    var T3: number = Math.min(T7, T1);
    var T2: number = Math.max(T6, T0);

    var T4: number = T2 * (12.0 / Math.PI);
    var T5: number = T3 * (12.0 / Math.PI);

    if (T3 < T2) {
        T2 = 0.0;
        T3 = 0.0;
    }

    T6 = T6 + Math.PI * 2.0;

    var R4: number;
    if (T6 < T1) {
        var T8: number = T6;
        var T9: number = T1;
        R4 = Func3(L2, L1, T3, T2, R1, D) + Func3(L2, L1, T9, T8, R1, D);
    } else {
        T7 = T7 - Math.PI * 2.0;

        if (T7 > T0) {
            var T8: number = T0;
            var T9: number = T0;
            R4 = Func3(L2, L1, T3, T2, R1, D) + Func3(L2, L1, T9, T8, R1, D);
        } else {
            R4 = Func3(L2, L1, T3, T2, R1, D);
        }
    }

    var R3: number = Func3(0.0, L0, T1, T0, R1, D);

    return [T4,T5,R4 / R3];
}

export function computeSnowCPU(cells, constantsParams, temperature?, precipitation?) {
  // console.log("test");
  let max = 0;
  for (let idx = 0; idx < cells.Inclination.length; idx++) {
    // var celldata = cells[idx];
        
    var areaSquareMeters:number = cells.AreaXZ[idx] * 100; // m^2 Each cell is constant 20000m^2 for now
    // console.log("areaSquareMeters: ", areaSquareMeters);

    //for (var time:i32 = 0; time < SimulationCSVariables.Timesteps; time=time+1) {
    var stationAltitudeOffset:number = cells.Altitude[idx] - constantsParams.measurementAltitude;
    var temperatureLapse:number = - (0.5 * stationAltitudeOffset) / (50.0 );
    console.log("temperatureLapse: ", temperatureLapse, "stationAltitudeOffset: ", stationAltitudeOffset, "cells.Altitude[idx]: ", cells.Altitude[idx], "constantsParams.measurementAltitude: ", constantsParams.measurementAltitude)

    var tAir:number= typeof temperature !== 'undefined' ? temperature + temperatureLapse : sim_params.Temperature + temperatureLapse; // degree Celsius

    var precipitationLapse:number= 10.0 / 24.0 * stationAltitudeOffset / (50.0);
        // const precipitationLapse: number = 0;
    var precipitationNum:number = typeof precipitation !== 'undefined' ? precipitation : sim_params.Precipitation;
    console.log("precipitationNum: ", precipitationNum, "precipitationLapse: ", precipitationLapse, "tAir: ", tAir, "temperature: ", temperature, "temperatureLapse: ", temperatureLapse, "stationAltitudeOffset: ", stationAltitudeOffset, "cells.Altitude[idx]: ", cells.Altitude[idx], "constantsParams.measurementAltitude: ", constantsParams.measurementAltitude);
    cells.DaysSinceLastSnowfall[idx] += 1.0 / 24.0;

      // Apply precipitation
    if (precipitationNum > 0.0) {
        precipitationNum += precipitationLapse;
        cells.DaysSinceLastSnowfall[idx] = 0.0;

        // New snow/rainfall
        //let rain: boolean = tAir > SimulationCSConstants.TSnowB;

        if (tAir > SimulationCSConstants.TSnowB) {
            cells.SnowAlbedo[idx] = 0.4; // New rain drops the albedo to 0.4
        } else {
            // Variable lapse rate as described in "A variable lapse rate snowline model for the Remarkables, Central Otago, New Zealand"
            var snowRate:number= Math.max(0.0, 1.0 - (tAir - constantsParams.tSnowA) / (constantsParams.tSnowB - constantsParams.tSnowA));

            // console.log("snow rate: ", snowRate, "areaSquareMeters: ", areaSquareMeters, "precipitationNum: ", precipitationNum, "snow water equivalent: ", cells.SnowWaterEquivalent[idx]);
            cells.SnowWaterEquivalent[idx] += (precipitationNum * areaSquareMeters * snowRate); // l/m^2 * m^2 = l
            // console.log("snow water equivalent with precip: ", cells.SnowWaterEquivalent[idx])
            cells.SnowAlbedo[idx] = 0.8; // New snow sets the albedo to 0.8
        }
    }
    console.log("temperature: " , temperature, "snow water equivalent: ", cells.SnowWaterEquivalent[idx])
      
      // Apply melt
    if (cells.SnowWaterEquivalent[idx] > 0.0) {
        if (cells.DaysSinceLastSnowfall[idx] >= 0.0) {
            // @TODO is time T the degree-days or the time since the last snowfall?
            cells.SnowAlbedo[idx] = 0.4 * (1.0 + Math.exp(-constantsParams.k_e * cells.DaysSinceLastSnowfall[idx]));
        }

        // Temperature higher than melt threshold and cell contains snow
        if (tAir > constantsParams.tMeltA) {
            var dayNormalization: number = 1.0 / 24.0; // day made it 1

            // Radiation Index
            // console.log("inclination: ", cells.Inclination[idx], "aspect: ", cells.Aspect[idx], "latitude: ", cells.Latitude[idx], "day of year: ", constantsParams.dayOfYear);
            var output = SolarRadiationIndex(cells.Inclination[idx],cells.Aspect[idx], cells.Latitude[idx], constantsParams.dayOfYear); // 1
            // console.log("output: ", output);
            var r_i:number=output[2];
            var T4: number=output[0];
            var T5: number=output[1];

            // Diurnal approximation
            var t: number = constantsParams.hourOfDay;
            var D: number = Math.abs(T4) + Math.abs(T5);
            var r_i_t: number = Math.max(Math.abs(Math.PI * r_i / 2.0 * Math.sin(Math.PI * t / D - Math.abs(T4) / Math.PI)), 0.0);
            // console.log("r_i_t: ", r_i_t, "t: ", t, "D: ", D, "T4: ", T4, "T5: ", T5)
            //var r_i_t: number =5.0;
            // Melt factor
            // @TODO melt factor test
            var vegetationDensity: number = 0.0;
            var k_v: number = Math.exp(-4.0 * vegetationDensity); // 1
            var c_m: number = constantsParams.k_m * k_v * r_i_t * (1.0 - cells.SnowAlbedo[idx]) * dayNormalization * areaSquareMeters; // l/m^2/C�/day * day * m^2 = l/m^2 * 1/day * day * m^2 = l/C�
            // console.log("c_m: ", c_m, "k_v: ", k_v, "r_i_t: ", r_i_t, "snow albedo: ", cells.SnowAlbedo[idx], "dayNormalization: ", dayNormalization, "areaSquareMeters: ", areaSquareMeters);
            var meltFactor: number;
            if(tAir < constantsParams.tMeltB){
                meltFactor= constantsParams.meltFactor * (tAir - constantsParams.tMeltA) * (tAir - constantsParams.tMeltA) / (constantsParams.tMeltB - constantsParams.tMeltA);
            }else{
                meltFactor=constantsParams.meltFactor * (tAir - constantsParams.tMeltA);
            }

            var m: number = c_m * meltFactor; // l/C� * C� = l
            // console.log("c_m: ", c_m, "meltFactor: ", meltFactor, "melt amount: ", m);
            // Apply melt
            cells.SnowWaterEquivalent[idx] -= m;
            console.log("snow water equivalent after melt: ", cells.SnowWaterEquivalent[idx]);
            cells.SnowWaterEquivalent[idx] = Math.max(0.0, cells.SnowWaterEquivalent[idx]);
        }
    }
    //cells.Curvature-=0.001;
    // cells[idx] = cells;
    //var output_color: number=cells.SnowAlbedo;
    let slope = radiansToDegrees(cells.Inclination[idx]);

	  let f = (slope < 15) ? 0 : slope / 60;
    let a3 = 50.0;
    cells.InterpolatedSWE[idx] = Math.max(0, cells.SnowWaterEquivalent[idx] * (1 - f) * (1 + a3 * cells.Curvature[idx]) / areaSquareMeters);
    var output_color: number=cells.InterpolatedSWE[idx];
    if (output_color > max) {
      max = output_color;
    }
    // console.log("snow data for cell: ", idx, " : ", cells.InterpolatedSWE[idx], " : ", cells.SnowAlbedo[idx]);
    // console.log("output_color: ", output_color);
  }
  
  console.log("max: ", max);
  for (let idx = 0; idx < cells.Inclination.length; idx++) {
    if (cells.InterpolatedSWE[idx] / max > 0.8)
    {
      console.log("SWE: " + cells.InterpolatedSWE[idx]);
      console.log(cells.InterpolatedSWE[idx] / max);
    }
  }
}
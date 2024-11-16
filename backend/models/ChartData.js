const mongoose = require('mongoose');

const chartDataSchema = new mongoose.Schema({
  createdAt: { type: Date, required: true },
  serialNo: { type: String, required: true },
  clientID: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
  deviceMapID: { type: mongoose.Schema.Types.ObjectId, ref: 'DeviceMap' },
  devices: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Device' }],
  total_kwh: { type: Number, required: true },
  ac_run_hrs: { type: Number },
  ac_fan_hrs: { type: Number },
  algo_status: { type: Number },
  billing_ammount: { type: Number },
  cost_reduction: { type: Number },
  energy_savings: {
    savings_percent: { type: Number },
    ref_kwh: { type: Number },
    us_meter: { type: Number },
    us_calc: { type: Number },
    inv_factor: { type: Number },
  },
  mitigated_co2: { type: Number },
  weather: {
    max_temp: { type: Number },
    min_temp: { type: Number },
  },
}, { timestamps: true });

module.exports = mongoose.model('ChartData', chartDataSchema);

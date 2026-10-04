const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  caption: { type: String, default: '' },
  videoUrl: { type: String, required: true },
  thumbnailUrl: { type: String, default: '' },
  music: { type: String, default: '' },
  hashtags: [String],
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  shares: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  duration: { type: Number, default: 0 },
}, { timestamps: true });

videoSchema.index({ hashtags: 1, createdAt: -1 });

module.exports = mongoose.model('Video', videoSchema);

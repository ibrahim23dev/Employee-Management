const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
}, { timestamps: true });

categorySchema.index({
  name: 'text',
});

// Change the model name to 'category'
module.exports = model('category', categorySchema);

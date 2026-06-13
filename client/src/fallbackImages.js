export const fallbackImages = [
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=1000&q=80',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&w=1000&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&w=1000&q=80',
  'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&w=1000&q=80',
  'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&w=1000&q=80',
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&w=1000&q=80',
];

export const getFallbackImage = (id) => {
  if (!id) return fallbackImages[0];
  const charSum = id.toString().split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return fallbackImages[charSum % fallbackImages.length];
};

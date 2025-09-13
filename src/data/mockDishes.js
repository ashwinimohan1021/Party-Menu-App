export const CATEGORIES = ['STARTER', 'MAIN COURSE', 'DESSERT', 'SIDES']

export const dishes = [
  // STARTER (6)
  {
    id: 1,
    name: 'Crispy Chicken',
    description: 'Spicy crispy fried chicken bites.',
    image: 'https://images.pexels.com/photos/15910245/pexels-photo-15910245.jpeg',
    mealType: 'STARTER',
    type: 'NON-VEG',
    ingredients: [
      { name: 'Chicken', quantity: '250g' },
      { name: 'Flour', quantity: '100g' },
    ],
  },
  {
    id: 2,
    name: 'Chicken Tikka',
    description: 'Tender chicken chunks marinated with spices and grilled.',
    image: 'https://images.pexels.com/photos/29173114/pexels-photo-29173114.jpeg',
    mealType: 'STARTER',
    type: 'NON-VEG',
    ingredients: [
      { name: 'Chicken', quantity: '200g' },
      { name: 'Yogurt', quantity: '50g' },
    ],
  },
  {
    id: 3,
    name: 'Paneer Tikka',
    description: 'Marinated paneer cubes grilled to perfection.',
    image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg',
    mealType: 'STARTER',
    type: 'VEG',
    ingredients: [
      { name: 'Paneer', quantity: '150g' },
      { name: 'Yogurt', quantity: '50g' },
    ],
  },
  {
    id: 4,
    name: 'Veg Spring Roll',
    description: 'Crispy rolls stuffed with veggies.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    mealType: 'STARTER',
    type: 'VEG',
    ingredients: [
      { name: 'Cabbage', quantity: '50g' },
      { name: 'Carrot', quantity: '1' },
    ],
  },
  {
    id: 5,
    name: 'Chili Chicken',
    description: 'Spicy Indo-Chinese chicken starter.',
    image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
    mealType: 'STARTER',
    type: 'NON-VEG',
    ingredients: [
      { name: 'Chicken', quantity: '200g' },
      { name: 'Chili Sauce', quantity: '50g' },
    ],
  },
  {
    id: 6,
    name: 'Masala Papad',
    description: 'Crispy papad topped with masala onions and tomatoes.',
    image: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
    mealType: 'STARTER',
    type: 'VEG',
    ingredients: [
      { name: 'Papad', quantity: '2 pcs' },
      { name: 'Onion', quantity: '1' },
    ],
  },

  // MAIN COURSE (6)
  {
    id: 7,
    name: 'Butter Chicken',
    description: 'Creamy tomato-based chicken curry.',
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
    mealType: 'MAIN COURSE',
    type: 'NON-VEG',
    ingredients: [
      { name: 'Chicken', quantity: '300g' },
      { name: 'Butter', quantity: '50g' },
    ],
  },
  {
    id: 8,
    name: 'Kadhai Paneer',
    description: 'Paneer cubes in spicy onion gravy with onions and capsicum.',
    image: 'https://images.pexels.com/photos/9609842/pexels-photo-9609842.jpeg',
    mealType: 'MAIN COURSE',
    type: 'VEG',
    ingredients: [
      { name: 'Paneer', quantity: '200g' },
      { name: 'Capsicum', quantity: '1' },
    ],
  },
  {
    id: 9,
    name: 'Mutton Rogan Josh',
    description: 'Aromatic lamb curry with Kashmiri spices.',
    image: 'https://images.pexels.com/photos/29684989/pexels-photo-29684989.jpeg',
    mealType: 'MAIN COURSE',
    type: 'NON-VEG',
    ingredients: [
      { name: 'Mutton', quantity: '400g' },
      { name: 'Yogurt', quantity: '100g' },
    ],
  },
  {
    id: 10,
    name: 'Dal Tadka',
    description: 'Yellow dal tempered with ghee, garlic, and spices.',
    image:  'https://images.pexels.com/photos/33430562/pexels-photo-33430562.jpeg',
    mealType: 'MAIN COURSE',
    type: 'VEG',
    ingredients: [
      { name: 'Toor Dal', quantity: '200g' },
      { name: 'Ghee', quantity: '2 tbsp' },
    ],
  },
  {
    id: 11,
    name: 'Chicken Biryani',
    description: 'Fragrant rice with spiced chicken.',
    image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg',
    mealType: 'MAIN COURSE',
    type: 'NON-VEG',
    ingredients: [
      { name: 'Chicken', quantity: '250g' },
      { name: 'Basmati Rice', quantity: '200g' },
    ],
  },
  {
    id: 12,
    name: 'Palak Paneer',
    description: 'Paneer cooked in spinach gravy.',
    image: 'https://images.pexels.com/photos/33430562/pexels-photo-33430562.jpeg',
    mealType: 'MAIN COURSE',
    type: 'VEG',
    ingredients: [
      { name: 'Paneer', quantity: '150g' },
      { name: 'Spinach', quantity: '200g' },
    ],
  },

  // DESSERT (6)
  {
    id: 13,
    name: 'Gulab Jamun',
    description: 'Soft milk dumplings in sugar syrup.',
    image: 'https://images.pexels.com/photos/11887844/pexels-photo-11887844.jpeg',
    mealType: 'DESSERT',
    type: 'VEG',
    ingredients: [
      { name: 'Milk Powder', quantity: '100g' },
      { name: 'Sugar', quantity: '150g' },
    ],
  },
  {
    id: 14,
    name: 'Rasgulla',
    description: 'Spongy balls made of chhena soaked in syrup.',
    image: 'https://images.pexels.com/photos/8788869/pexels-photo-8788869.jpeg',
    mealType: 'DESSERT',
    type: 'VEG',
    ingredients: [
      { name: 'Chhena', quantity: '200g' },
      { name: 'Sugar Syrup', quantity: '300ml' },
    ],
  },
  {
    id: 15,
    name: 'Jalebi',
    description: 'Crispy spirals soaked in sugar syrup.',
    image: 'https://images.pexels.com/photos/7566499/pexels-photo-7566499.jpeg',
    mealType: 'DESSERT',
    type: 'VEG',
    ingredients: [
      { name: 'Flour', quantity: '100g' },
      { name: 'Sugar Syrup', quantity: '150ml' },
    ],
  },
  {
    id: 16,
    name: 'Ice Cream Sundae',
    description: 'Vanilla ice cream topped with chocolate and nuts.',
    image: 'https://images.unsplash.com/photo-1657225953401-5f95007fc8e0?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    mealType: 'DESSERT',
    type: 'VEG',
    ingredients: [
      { name: 'Vanilla Ice Cream', quantity: '2 scoops' },
      { name: 'Chocolate Syrup', quantity: '2 tbsp' },
    ],
  },
  {
    id: 17,
    name: 'Carrot Halwa',
    description: 'Sweet dish made with carrots, milk, and sugar.',
    image: 'https://images.pexels.com/photos/20446403/pexels-photo-20446403.jpeg',
    mealType: 'DESSERT',
    type: 'VEG',
    ingredients: [
      { name: 'Carrots', quantity: '200g' },
      { name: 'Sugar', quantity: '100g' },
    ],
  },
  {
    id: 18,
    name: 'Cheesecake',
    description: 'Creamy dessert with biscuit base.',
    image: 'https://images.pexels.com/photos/8425184/pexels-photo-8425184.jpeg',
    mealType: 'DESSERT',
    type: 'VEG',
    ingredients: [
      { name: 'Cream Cheese', quantity: '200g' },
      { name: 'Biscuits', quantity: '100g' },
    ],
  },

  // SIDES (6)
  {
    id: 19,
    name: 'Garlic Naan',
    description: 'Soft flatbread with garlic butter.',
    image: 'https://allwaysdelicious.com/wp-content/uploads/2022/04/garlic-butter-naan-4-1024x682.jpg',
    mealType: 'SIDES',
    type: 'VEG',
    ingredients: [
      { name: 'Flour', quantity: '200g' },
      { name: 'Garlic', quantity: '2 cloves' },
    ],
  },
  {
    id: 20,
    name: 'Tandoori Roti',
    description: 'Whole wheat roti baked in tandoor.',
    image: 'https://www.whiskaffair.com/wp-content/uploads/2020/08/Tandoori-Roti-2-3.jpg',
    mealType: 'SIDES',
    type: 'VEG',
    ingredients: [
      { name: 'Wheat Flour', quantity: '200g' },
      { name: 'Salt', quantity: '1 tsp' },
    ],
  },
  {
    id: 21,
    name: 'Jeera Rice',
    description: 'Basmati rice flavored with cumin seeds.',
    image: 'https://lentillovingfamily.com/wp-content/uploads/2025/08/jeera-rice-1.jpg',
    mealType: 'SIDES',
    type: 'VEG',
    ingredients: [
      { name: 'Rice', quantity: '200g' },
      { name: 'Cumin', quantity: '1 tsp' },
    ],
  },
  {
    id: 22,
    name: 'Papad',
    description: 'Crispy lentil-based thin cracker.',
    image: 'https://i0.wp.com/live.staticflickr.com/65535/52189660130_b1726820b1_o_d.jpg?ssl=1&w=740',
    mealType: 'SIDES',
    type: 'VEG',
    ingredients: [
      { name: 'Urad Dal Flour', quantity: '50g' },
      { name: 'Salt', quantity: '1 tsp' },
    ],
  },
  {
    id: 23,
    name: 'Onion Salad',
    description: 'Sliced onions with lemon and spices.',
    image: 'https://cdn.create.vista.com/api/media/small/23796107/stock-photo-mixed-salad',
    mealType: 'SIDES',
    type: 'VEG',
    ingredients: [
      { name: 'Onion', quantity: '1' },
      { name: 'Lemon', quantity: '1' },
    ],
  },
  {
    id: 24,
    name: 'Raita',
    description: 'Yogurt mixed with cucumber and spices.',
    image: 'https://www.feastingathome.com/wp-content/uploads/2019/05/Raita-Recipe-2.jpg',
    mealType: 'SIDES',
    type: 'VEG',
    ingredients: [
      { name: 'Yogurt', quantity: '200g' },
      { name: 'Cucumber', quantity: '1' },
    ],
  },
]

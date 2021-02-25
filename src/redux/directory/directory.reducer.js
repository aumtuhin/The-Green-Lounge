const INITIAL_STATE = {
    sections: [
        {
            title: 'Breakfast',
            imageUrl: 'https://i.ibb.co/6vqpcdg/breakfast.png',
            id: 1,
            linkUrl: 'shop/hats'
          },
          {
            title: 'Lunch',
            imageUrl: 'https://i.ibb.co/whVzpFv/lunch.png',
            id: 2,
            linkUrl: 'shop/jackets'
          },
          {
            title: 'Dinner',
            imageUrl: 'https://i.ibb.co/vzjVBMV/dinner.png',
            id: 3,
            linkUrl: 'shop/sneakers'
          },
          {
            title: 'Deserts',
            imageUrl: 'https://i.ibb.co/fMQk7sS/desert.png',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
          },
          {
            title: 'Drinks',
            imageUrl: 'https://i.ibb.co/m0Fs4xK/drinks.png',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
          }
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default directoryReducer;
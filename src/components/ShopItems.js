import goldenGate from  '../images/golden-gate.jpg';
import brooklynBridge from '../images/brooklyn-bridge.jpg';
import brokenBridge from  '../images/broken-bridge.jpg';
import littleManatee from '../images/little-manatee-river.jpg';
import towerBridge from  '../images/tower-bridge.jpg';
import oldBridge from '../images/old-bridge-on-canal.jpg';
import mackinawBridge from  '../images/mackinaw-bridge.jpg';
import coveredBridge from '../images/covered-bridge.jpg';

const ShopItems = {
    item: [
      {name: 'Golden Gate Bridge', 
      images: goldenGate, 
      id: 5483, 
      price: '35000000',
      description: 'The Golden Gate Bridge is a suspension bridge 1.7 miles long and 746 feet high. It was constructed from 1933-1937. In a beautiful shade of red, it is said to be one of the most photographed bridges.'
    },

      {name: 'Brooklyn Bridge',
      images: brooklynBridge,
      id: 8675,
      price: '15000000',
      description: 'The Brooklyn Bridge is a suspension bridge 1.1 miles long in the heart of New York City. It is 137 years old and was the longest suspension bridge in the world at the time of its construction.'
    },

      {name: 'Basic Bridge',
      images: brokenBridge,
      id: 5309,
      price: '57.39',
      description: 'Connect land over small streams with a basic bridge. This is one of our newer bridge at 25 years old. The need for updating is reflected in the low price.',
    },

    {name: 'Little Manatee River Bridge', 
    images: littleManatee, 
    id: 3290, 
    price: '230000',
    description: 'This is a Warren-type simple truss bridge. With a little TLC you can transport your train over a river in style.',
  },

    {name: 'Tower Bridge',
    images: towerBridge,
    id: 2130,
    price: '1644558.20',
    description: 'This bridge has been in operation since 1886. This combined bascule and suspension bridge is sure to get you noticed.',
  },

    {name: 'Old Canal Bridge',
    images: oldBridge,
    id: 1256,
    price: '9999.99',
    description: 'Has your homeowner\'s association erected a canal through your yard? This is the perfect solution to get to the other side.',
    },

    {name: 'Mackinac Bridge',
    images: mackinawBridge,
    id: 4321,
    price: '100000000',
    description: 'Own your own 5-mile long suspension bridge. Imagine the pride in knowing your bridge is the only thing connecting Michigan\'s two penninsulas.',
    },

    {name: 'Covered Bridge',
    images: coveredBridge,
    id: 1001,
    price: '5000',
    description: 'Cross a river in style with this old-fashioned covered bridge. You will not need to worry about getting wet while crossing this bridge in a storm.',
    },

    ]
  }

  export default ShopItems;
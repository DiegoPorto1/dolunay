import tazaEnBandeja from './components/assets/Ofertas/Tazon con bandeja de madera.jpg';
import mateBandeja from './components/assets/Ofertas/mate con bandeja de madera.jpeg'
import comboDulceraTaza from './components/assets/Ofertas/bandeja madera más dulcera más taza y lleva cuchara de regalo.jpeg'
import bandejaPrimavera from './components/assets/Ofertas/Taza con bandeja pensamiento.jpeg'
import bandejaMateTazon from './components/assets/Ofertas/Tazon mas mate mas bandeja de madera.jpg'
import bandejaTazonCuchara from './components/assets/Ofertas/Tazon mas cuchara mas bandeja de madera.jpg'
import TazaBande1 from './components/assets/Ofertas/Taza mas bandeja1.jpg'
import TazaBande2 from './components/assets/Ofertas/taza mas bandeja2.jpg'
import TazaBande3 from './components/assets/Ofertas/taza mas bandeja3.jpg'
import TazaBande5 from './components/assets/Ofertas/taza mas bandeja5.jpg'
import TazaBande6 from './components/assets/Ofertas/taza mas bandeja6.jpg'
import TazaBande7 from './components/assets/Ofertas/taza mas bandeja7.jpeg'
import taza1 from './components/assets/Ofertas/taza1.jpeg'
import taza2 from './components/assets/Ofertas/taza2.jpeg'
import taza3 from './components/assets/Ofertas/taza3.jpeg'
import taza4 from './components/assets/Ofertas/taza4.jpeg'
import taza5 from './components/assets/Ofertas/taza5.jpeg'
import taza7 from './components/assets/Ofertas/taza7.jpeg'
import posaTorta from './components/assets/Ofertas/posaTorta.jpeg'
import taza46001 from './components/assets/Ofertas/taza46001.jpeg'
import taza46002 from './components/assets/Ofertas/taza46002.jpeg'
import taza46003 from './components/assets/Ofertas/taza46003.jpeg'
import taza46004 from './components/assets/Ofertas/taza46004.jpeg'
import taza46005 from './components/assets/Ofertas/taza46005.jpeg'

export const products2 = [
    {
     
      name: "Tazon + bandeja de madera ",
      price: 11450,
      category: 'tazas',
      img: tazaEnBandeja,
      stock: 1 ,
      description: '',
      id: 100,
      
    },
    {
        
        name: "Mate + bandeja de madera ",
        price: 7800,
        category: 'set',
        img:mateBandeja ,
        stock: 1 ,
        description: '',
        id: 101,
        
      },
      {
        
        name: "Dulcera + taza + bandeja con cuchara de regalo ",
        price: 16500,
        category: 'tazas',
        img:comboDulceraTaza ,
        stock: 1 ,
        description: '',
        id: 102,
        
      },
      {
        
        name: "Bandeja y taza primavera",
        price: 13507,
        category: 'set',
        img: [bandejaPrimavera,""
        ],
        stock: 1 ,
        description: '',
        id: 103,
        
      },
      {
        
        name: "Tazon + mate + bandeja con bombilla de regalo",
        price: 15990,
        category: 'set',
        img: bandejaMateTazon,
        stock: 1 ,
        description: '',
        id: 104,
        
      },
      {
        
        name: "Taza + plato + bandeja con cuchara de regalo ",
        price: 11200,
        category: 'set',
        img:bandejaTazonCuchara ,
        stock: 1 ,
        description: '',
        id: 105,
        
      },
      {
        
        name: "Taza + bandeja. Varios modelos ",
        price: 15300,
        category: 'set',
        img: [TazaBande1, TazaBande2, TazaBande3, TazaBande5, TazaBande6,  TazaBande7] ,
        stock: 1 ,
        description: '',
        id: 106,
        
      },
      {
        
        name: "Tazas. Varios modelos circo ",
        price: 6900,
        category: 'tazas',
        img: [taza1, taza2, taza3, taza4,taza5,taza7],
        stock: 1 ,
        description: '',
        id: 107,
        
      },
      {
        
        name: "Posa torta ",
        price: 13650,
        category: 'platos',
        img: posaTorta,
        stock: 1 ,
        description: '',
        id: 108,
        
      },
      {
        
        name: "Tazas. Varios modelos",
        price:5500,
        category: 'tazas',
        img:[taza46001, taza46002, taza46003, taza46004,taza46005,],
        stock: 1 ,
        description: '',
        id: 109,
        
      },
    
      
  ];

export const getProducts = () => {
    return new Promise ((resolve)=> {
        setTimeout(() => {
            resolve (products2)
        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(products2.find(prod => prod.id === parseInt(productId)))
        },500)
    })
}

export const getProductByCategory = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(products2.filter(prod => prod.category === productId))
        },500)
    })

}

export const getProductsFromMock2 = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products2);
      }, 1000);
    });
  };
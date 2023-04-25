export default async function handler(request, res) {

    const types = [
        {
            "backgroundColor": 'yellow',
            "tvButtons": 'Blue',
            "border": 'black',
            "textColor": 'white',
            "tvOutline": 'grey',
            "cardColor": 'blue',

            "block1":'aquamarine',
            "block2":'blue',
            "block3":'grey',
            "block4":'green',
            "block5":'blue',
            "block6": 'purple',
            "block7":'pink',

            "bottom1":'purple',
            //black block
            "bottom3":'purple',
            //black block
            "bottom5":'purple',
            //black block
            "bottom7":'purple',
            "mediaColor": 'blue',
            "topName": 'blue',
            "name" : 'bleh',
            "nameTitle" : 'boy',
            "namePlace" : 'boop',
            "image1": './assets/google.png',
            "logo": '../assets/pngtree.png',



        
        },
        {
        "backgroundColor": 'yellow',
            "tvButtons": 'Blue',
            "border": 'black',
            "textColor": 'white',
            "tvOutline": 'grey',
            "cardColor": 'blue',

            "block1":'aquamarine',
            "block2":'blue',
            "block3":'grey',
            "block4":'green',
            "block5":'blue',
            "block6": 'purple',
            "block7":'pink',

            "bottom1":'purple',
            //black block
            "bottom3":'purple',
            //black block
            "bottom5":'purple',
            //black block
            "bottom7":'purple',
            "mediaColor": 'blue',
            "topName": 'blue',
            "name" : 'bleh',
            "nameTitle" : 'boy',
            "namePlace" : 'boop',
            "image1": './assets/google.png',
            "logo": '../assets/pngtree.png',
        },
        {

        "backgroundColor": 'yellow',
            "tvButtons": 'Blue',
            "border": 'black',
            "textColor": 'white',
            "tvOutline": 'grey',
            "cardColor": 'blue',

            "block1":'aquamarine',
            "block2":'blue',
            "block3":'grey',
            "block4":'green',
            "block5":'blue',
            "block6": 'purple',
            "block7":'pink',

            "bottom1":'purple',
            //black block
            "bottom3":'purple',
            //black block
            "bottom5":'purple',
            //black block
            "bottom7":'purple',
            "mediaColor": 'blue',
            "topName": 'blue',
            "name" : 'bleh',
            "nameTitle" : 'boy',
            "namePlace" : 'boop',
            "image1": './assets/google.png',
            "logo": '../assets/pngtree.png',
    },
        
        
        
            
            
        
        
 ];

  res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
  res.json(types);
}
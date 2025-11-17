import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';


export default function InfoBox({ info }) {
     const init_url = "https://images.unsplash.com/opengraph/1x1.png?auto=format&fit=crop&w=1200&h=630&q=60&bg=white&mark-w=824&mark-y=0&blend-mode=normal&blend-align=middle%2Cright&mark-x=0&mark=https:%2F%2Fimages.unsplash.com%2Fphoto-1513140149558-b4eb51acf6c0%3Fcrop%3Dedges%252Cfaces%26cs%3Dtinysrgb%26fit%3Dcrop%26fm%3Djpg%26ixid%3DMnwxMjA3fDB8MXxjb2xsZWN0aW9ufDF8MTUxMjQzNnx8fHx8Mnx8MTY3MjU2MzAzMQ%26ixlib%3Drb-4.0.3%26q%3D60%26w%3D824%26auto%3Dformat%26h%3D630%26mark-w%3D64%26mark-align%3Dtop%252Cleft%26mark-pad%3D50%26blend-mode%3Dnormal%26blend-alpha%3D10%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Flogo.png%26blend%3D000000&blend=https:%2F%2Fimages.unsplash.com%2Fopengraph%2F1x1.png%3Fauto%3Dformat%26fit%3Dcrop%26w%3D376%26h%3D630%26q%3D60%26bg%3Dwhite%26mark-w%3D372%26mark-y%3D317%26blend-mode%3Dnormal%26blend-pad%3D0%26blend-w%3D372%26blend-align%3Dtop%252Cleft%26blend-x%3D4%26mark-x%3D4%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252F1x1.png%253Far%253D372%25253A313%2526auto%253Dformat%2526fit%253Dcrop%2526h%253D313%2526q%253D60%2526crop%253Dedges%25252Cfaces%2526blend-mode%253Dnormal%2526blend-alpha%253D100%2526blend%253Df2f2f2f2%26blend%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252F1x1.png%253Far%253D372%25253A313%2526auto%253Dformat%2526fit%253Dcrop%2526h%253D313%2526q%253D60%2526crop%253Dedges%25252Cfaces%2526blend-mode%253Dnormal%2526blend-alpha%253D100%2526blend%253Df2f2f2f2";
     const HOT_URL = "https://plus.unsplash.com/premium_photo-1711662177249-138d96f8c4d6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90JTIwd2VhdGhlciUyMGltYWdlfGVufDB8fDB8fHww";
     const COLD_URL = "https://images.unsplash.com/photo-1636185539310-a94941cd3789?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZCUyMHdlYXRoZXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D";
     const RAIN_URL ="https://images.unsplash.com/photo-1434118489318-42a0e62c6235?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJhaW4lMjAlMjB3ZWF0aGVyJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D";
     

     return (
          <div className="infoBox">
               <div className="cardContainer">
                    <Card sx={{ maxWidth: 345 }}>
                         <CardMedia
                              sx={{ height: 140 }}
                              image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                              title="mist weather"
                         />
                         <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                                   {info.city}{info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <SunnyIcon />: <AcUnitIcon />}
                              </Typography>
                              <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                                   <p>Temperature: {info.temp}&deg; C</p>
                                   <p>Humidity: {info.humidity}</p>
                                   <p>Min Temp: {info.tempMin}&deg; C</p>
                                   <p>Max Temp: {info.tempMax}&deg; C</p>
                                   <p>
                                        the weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg; C
                                   </p>
                              </Typography>
                         </CardContent>
                    </Card>
               </div>
          </div>
     );
}
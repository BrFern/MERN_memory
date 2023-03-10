import React , {useState, useEffect}from 'react'; 
import { Container, AppBar, Grow, Grid, Typography } from '@mui/material'; 
import {useDispatch} from 'react-redux';

import {getPosts} from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.png';
import useStyles from './styles';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
    <Container maxWidth='lg'>
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <Typography className = {classes.heading} variant='h2' align='center'>
                Memories
            </Typography>
            <img className = {classes.image} src={memories} alt='memories' height='60px' />
        </AppBar>
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}> 
                    <Grid item xs = {12} sm={7}>
                        <Posts setCurrentId={setCurrentId}/>
                    </Grid>
                    <Grid item xs = {12} sm={4}>
                            <Form currentId={currentId} setCurrentId = {setCurrentId} />
                        </Grid>
                </Grid>
            </Container>
        </Grow>
    </Container>
    
    );
} 

export default App;









//Lorivie's code-compiled 

//import React from 'react';
// import {Container, AppBar, Typography, Grow, Grid} from '@mui/material';
 
// import Posts from './components/Posts/Posts';
// import Form from './components/Form/Form';
// import memories from './images/memories.png';


 
// const App = () => {
//     return (
//     <Container maxidth="lg">
//         <AppBar position="static" color="inherit">
//             <Typography variant = "h2" align="center">Memories</Typography>
//             <img src={memories} alt="memories" height="60" />
            
//         </AppBar>
//         <Grow in>
//             <Container>
//                 <Grid container justifyContent="space-between" alignItems ="stretch" spacing={3} >
//                     <Grid item xs={12} sm={7}>
//                         <Posts />
//                     </Grid>
//                     <Grid item xs={12} sm={4}>
//                         <Form />
//                     </Grid>
//                 </Grid>
//             </Container>
//         </Grow>
//     </Container>
//     )
// }
 
// export default App;
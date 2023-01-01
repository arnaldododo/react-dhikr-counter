import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import * as action from "./store/actions/index";
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function App() {
  const counter = useSelector((state) => state.counter);
  const dua = useSelector((state) => state.dua);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Container maxWidth="xs" sx={{ mt:20 }}> 
        <Card>
          <CardContent>
            <Typography variant="h5" color="text.secondary" gutterBottom>
            Dhikr Counter
            </Typography>
            <Typography variant="h1" component="div">
              <IconButton aria-label="delete"
                onClick={() => dispatch(action.reset())}>
                <RestartAltIcon />
              </IconButton>
              {counter}
              <IconButton aria-label="delete"
                onClick={() => dispatch(action.decrement())}>
                <RemoveIcon />
              </IconButton>
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              times so far.
            </Typography>
          </CardContent>
          <CardActions>
            <Switch onClick={() => dispatch(action.toggleText())} /> <Typography color="text.secondary">Toggle Text</Typography>
          </CardActions>
        </Card>
      </Container>

      <Typography variant="subtitle1" mt={3}>
        {dua ? 'Subhanallah Walhamdulillah Wallahuakbar.' : ''} 
      </Typography>
      
      <Fab color="primary" aria-label="add" 
        sx={{ position:'absolute', bottom:20 }}
        onClick={() => dispatch(action.increment())}>
        <AddIcon />
      </Fab>
    </div>
  );
}

export default App;

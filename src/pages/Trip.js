import React , {Component, Fragment, useRef } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import options from '../data/PlaceData';
import Jumbotron from 'react-bootstrap/Jumbotron';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Scrollbars } from 'react-custom-scrollbars';
import {Typography,Button,Paper,Tab,Tabs,Box,TextField,Select,InputLabel,MenuItem,FormControl,Fab,IconButton,Card,CardContent,Divider,Avatar,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,TableFooter,TablePagination} from "@material-ui/core";
import PropTypes from 'prop-types';
import placeOptions from '../data/PlaceData';
import cityOptions from '../data/CityData';
import modeOptions from '../data/modeOptions';
import { withStyles, makeStyles,useTheme } from '@material-ui/core/styles';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';




const mapStyles = {
  width: '800px',
  height: '500px',
  marginTop: '55px',
  marginLeft: '93px'
};


export function CityName() {
  const defaultProps = {
    options: cityOptions,
    getOptionLabel: (option) => option.cname_th +" ("+ option.cname_en +")",
  }
  return (
    <div style={{ width: 320 ,height:20}}>
      <Autocomplete
        {...defaultProps}
        id="cityName"
        autoComplete
        includeInputInList
        renderInput={(params) => <TextField {...params} label="ชื่อจังหวัด" style={{marginLeft:10}}/>}
      />
    </div>
  );
}

export function PlaceName() {
  const defaultProps = {
    options: placeOptions,
    getOptionLabel: (option) => option.pname,
  }
  return (
    <div style={{ width: 320 ,height:30}}>
      <Autocomplete
        {...defaultProps}
        multiple
        id="placeName"
        limitTags={1}
        autoComplete
        renderInput={(params) => <TextField  {...params} label="ชื่อสถานที่ท่องเที่ยว" style={{marginLeft:10}}/>}
      />
    </div>
  );
}


export function ModeName() {
  const defaultProps = {
    options: modeOptions,
    getOptionLabel: (option) => option.mname,
  }
  return (
    <div style={{ width: 320 ,height:20}}>
      <Autocomplete
        {...defaultProps}
        id="modeName"
        autoComplete
        includeInputInList
        renderInput={(params) => <TextField {...params} label="โหมดสถานที่" style={{marginLeft:10}}/>}
      />
    </div>
  );
}


export function DateStart() {
  return (
    <form noValidate>
      <TextField
        id="dateStart"
        label="วันที่เริ่มต้น"
        type="date"
        defaultValue="2020-01-01"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
export function DateEnd() {
  return (
    <form noValidate>
      <TextField
        id="dateEnd"
        label="วันที่สิ้นสุด"
        type="date"
        defaultValue="2020-01-01"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}


export function StartTime() {
  const [startTime, setStartTime] = React.useState('');
  const handleChange = (event) => {
    setStartTime(event.target.value);
  };
  return (
    <div>
      <FormControl style={{marginLeft:10}}>
        <InputLabel id="startTime">เวลาเริ่มต้น</InputLabel>
        <Select
          labelId="selectStartTime"
          id="selectStartTime"
          value={startTime}
          onChange={handleChange}
          style={{width:120}}
        >
          <MenuItem value={1}>00:00</MenuItem>
          <MenuItem value={2}>01:00</MenuItem>
          <MenuItem value={3}>02:00</MenuItem>
          <MenuItem value={4}>03:00</MenuItem>
          <MenuItem value={5}>04:00</MenuItem>
          <MenuItem value={6}>05:00</MenuItem>
          <MenuItem value={7}>06:00</MenuItem>
          <MenuItem value={8}>07:00</MenuItem>
          <MenuItem value={9}>08:00</MenuItem>
          <MenuItem value={10}>09:00</MenuItem>
          <MenuItem value={11}>10:00</MenuItem>
          <MenuItem value={12}>11:00</MenuItem>
          <MenuItem value={13}>12:00</MenuItem>
          <MenuItem value={14}>13:00</MenuItem>
          <MenuItem value={15}>14:00</MenuItem>
          <MenuItem value={16}>15:00</MenuItem>
          <MenuItem value={17}>16:00</MenuItem>
          <MenuItem value={18}>17:00</MenuItem>
          <MenuItem value={19}>18:00</MenuItem>
          <MenuItem value={20}>19:00</MenuItem>
          <MenuItem value={21}>20:00</MenuItem>
          <MenuItem value={22}>21:00</MenuItem>
          <MenuItem value={23}>22:00</MenuItem>
          <MenuItem value={24}>23:00</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export function EndTime() {
  const [endTime, setEndTime] = React.useState('');
  const handleChange = (event) => {
    setEndTime(event.target.value);
  };
  return (
    <div>
      <FormControl style={{marginLeft:10}}>
        <InputLabel id="endTime">เวลาสิ้นสุด</InputLabel>
        <Select
          labelId="selectEndTime"
          id="selectEndTime"
          value={endTime}
          onChange={handleChange}
          style={{width:120}}
        >
          <MenuItem value={1}>00:00</MenuItem>
          <MenuItem value={2}>01:00</MenuItem>
          <MenuItem value={3}>02:00</MenuItem>
          <MenuItem value={4}>03:00</MenuItem>
          <MenuItem value={5}>04:00</MenuItem>
          <MenuItem value={6}>05:00</MenuItem>
          <MenuItem value={7}>06:00</MenuItem>
          <MenuItem value={8}>07:00</MenuItem>
          <MenuItem value={9}>08:00</MenuItem>
          <MenuItem value={10}>09:00</MenuItem>
          <MenuItem value={11}>10:00</MenuItem>
          <MenuItem value={12}>11:00</MenuItem>
          <MenuItem value={13}>12:00</MenuItem>
          <MenuItem value={14}>13:00</MenuItem>
          <MenuItem value={15}>14:00</MenuItem>
          <MenuItem value={16}>15:00</MenuItem>
          <MenuItem value={17}>16:00</MenuItem>
          <MenuItem value={18}>17:00</MenuItem>
          <MenuItem value={19}>18:00</MenuItem>
          <MenuItem value={20}>19:00</MenuItem>
          <MenuItem value={21}>20:00</MenuItem>
          <MenuItem value={22}>21:00</MenuItem>
          <MenuItem value={23}>22:00</MenuItem>
          <MenuItem value={24}>23:00</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
function ChooseTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Paper elevation={0} style={{width:386,marginTop:10,marginLeft:-16}}>
      <Tabs
        value={value}
        indicatorColor="secondary"
        style={{backgroundColor:'#3C6E71'}}
        variant="fullWidth"
        onChange={handleChange}
      >
        <Tab style={{fontFamily:"csPrajad" ,fontSize:18,color:'white'}} label="สถานที่ท่องเที่ยว" {...a11yProps(0)}/>
        <Tab style={{fontFamily:"csPrajad" ,fontSize:18,color:'white'}} label="โรงแรม/ที่พัก" {...a11yProps(1)}/>
      </Tabs>
        <Scrollbars style={{ width: 382, height: 300,marginTop:5}}>
          <TabPanel value={value} index={0} >
              <Typography style={{fontFamily:"csPrajad",fontSize:20}}>
                ชื่อจังหวัด : 
              </Typography>
              <CityName/>
              <br/>
              <Divider style={{marginTop:20}}/>
              <Typography style={{fontFamily:"csPrajad",fontSize:20}}>
              <br/>
                ชื่อสถานที่ : 
              </Typography>
              <PlaceName/>
              <br/>
              <Divider style={{marginTop:20}}/>
              <Typography style={{fontFamily:"csPrajad",fontSize:20}}>
              <br/>
                หมวดสถานที่ : 
              </Typography>
              <ModeName/>
              <br/>
              <Divider style={{marginTop:20}}/>
              <Typography style={{fontFamily:"csPrajad",fontSize:20}}>
              <br/>
                วันที่เริ่มต้น : 
              </Typography>
              <Row style={{marginLeft:10}}><DateStart/><StartTime/></Row>
              <Divider style={{marginTop:20}}/>
              <Typography style={{fontFamily:"csPrajad",fontSize:20}}>
              <br/>
                วันที่สิ้นสุด : 
              </Typography>
              <Row style={{marginLeft:10}}><DateEnd/><EndTime/></Row>              
          </TabPanel>
          <TabPanel value={value} index={1} >
              <Typography style={{fontFamily:"csPrajad",fontSize:20}}>
              <br/>
                โรงแรม/ที่พัก : 
                <Fab
                    variant="extended"
                    size="large"
                    color="secondary"
                    aria-label="Add"
                    style={{width:150,height:50,marginLeft:20,fontFamily:'csPrajad',fontSize:16}}
                   >
                      เลือกโรงแรม/ที่พัก
              </Fab>
              </Typography>
              
          </TabPanel>
        </Scrollbars>
    </Paper>
    
  );
}

//----------------- Table ----------------//
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontFamily: 'csPrajad',
    fontSize: 20,
    fontWeight: 'bold'
  },
  body: {
    fontSize: 18,
    fontFamily: 'csPrajad'
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData( tripName, dateAndTime, updateData ) {
  return { tripName, dateAndTime, updateData };
}
const useStyles = makeStyles({
  table: {
    Width: 640,
  },
});
const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

const rows = [
  //ex data
  createData('ชลบุรี', '30/01/2021 10:52AM'),
  createData('ทริป', '31/01/2021 18:21PM'),
  createData('ทริป101', '04/02/2021 01:23AM'),

];

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}
TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function CustomizedTables() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage] = React.useState(5);
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ชื่อทริป</StyledTableCell>
            <StyledTableCell align="center">วัน-เวลาที่สร้าง</StyledTableCell>
            <StyledTableCell align="center">แก้ไข/ลบ</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.tripName}
              </StyledTableCell>
              <StyledTableCell align="center">{row.dateAndTime}</StyledTableCell>
              <StyledTableCell align="center">
                <IconButton aria-label="edit" size="small"><EditRoundedIcon/></IconButton> /  <IconButton aria-label="delete" size="small"><DeleteForeverRoundedIcon/></IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
           <TablePagination
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              ActionsComponent={TablePaginationActions}
            />
        </TableBody>
      </Table>
    </TableContainer>
  );
}

{/*     ////////       main     ///////    */ }
export class MapContainer extends Component {
  render() {
    return (
      <div className="Trip">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
      />
   
      <header className="App-header">
      </header>

      <section className="App-section">
      <Container fluid style={{marginTop:50 , marginBottom:50}}>
        <Row>
          <Paper elevation={5} style={{width:1200,height:600,marginTop:15,marginLeft:140}}>
            <Row>
            <Col>
            <Box p={5}>
            <Card style={{backgroundColor:'#3C6E71',width:450}}>
              <CardContent style={{color:'white'}}>
              <Row style={{margin:5}}>
                <Avatar alt="User" src="/" style={{width:60,height:60}}/>
                <Typography style={{margin:10, fontFamily:"csPrajad" ,fontSize:24,fontWeight:'bold'}}>Profile</Typography>
              </Row>
              <Divider style={{margin:10}}/>
              <Typography style={{fontFamily:"csPrajad" ,fontSize:18}}>ชื่อในระบบ :</Typography>
              <Typography style={{fontFamily:"csPrajad" ,fontSize:18}}> E-mail :</Typography>
              </CardContent>
            </Card>
            </Box>
            <Box ml={14}>
              <Button
                  variant="contained"
                  color="secondary"
                  style={{width:300,height:50}}
              >My Trip</Button>
            </Box>
            <Box ml={14} pt={2}>
              <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  style={{width:300,height:50}}
              >Recommended Trip</Button>
            </Box>
            </Col>
            <Col>
            <Box pt={5} ml={-12}>
            <Card style={{backgroundColor:'#284B63',width:640}}>
              <CardContent style={{color:'white'}}>
                <CustomizedTables/>
                <Fab
                    variant="extended"
                    size="large"
                    color="secondary"
                    aria-label="Add"
                    style={{width:150,height:60,margin:10}}
                   >
                      New Trip
                  </Fab>
              </CardContent>
            </Card>
            </Box>
            </Col>
            </Row>
          </Paper> 
        </Row>
        <Box p={10}/>
        <Row>
          <Paper elevation={5} style={{width:400,height:600,marginTop:15,marginLeft:140}}>
            <Card style={{backgroundColor:'#284B63',width:'auto'}}>
              <CardContent style={{color:'white'}}>
                <Typography style={{margin:10, fontFamily:"csPrajad" ,fontSize:20,fontWeight:'bold'}}>ข้อมูลทริป และเลือกที่พัก</Typography>
              </CardContent>
            </Card>
            <Box p={2}>
            <Typography style={{fontFamily:"csPrajad" ,fontSize:16,padding:5}}>ชื่อทริป :</Typography>
            <Typography style={{fontFamily:"csPrajad" ,fontSize:16,padding:5}}>จังหวัด :</Typography>
            <CityName/>
            <br/>
            <Typography style={{fontFamily:"csPrajad" ,fontSize:16,padding:5}}>วันที่ไป :</Typography>
            <DateStart/>
            <Typography style={{fontFamily:"csPrajad" ,fontSize:16,padding:5}}>วันที่กลับ :</Typography>
            <DateEnd/>
            <Typography style={{fontFamily:"csPrajad" ,fontSize:16,padding:5}}>ที่พัก :</Typography>
            </Box>
          </Paper>
          <Paper elevation={5} style={{width:400,height:600,marginTop:15,marginLeft:20}}>
            <Card style={{backgroundColor:'#284B63',width:'auto'}}>
              <CardContent style={{color:'white'}}>
              <Typography style={{margin:10, fontFamily:"csPrajad" ,fontSize:20,fontWeight:'bold'}}>จัดการทริป</Typography>
              </CardContent>
            </Card>
          </Paper> 
          <Paper elevation={5} style={{width:400,height:600,marginTop:15,marginLeft:20}}>
            <Card style={{backgroundColor:'#284B63',width:'auto'}}>
              <CardContent style={{color:'white'}}>
              <Typography style={{margin:10, fontFamily:"csPrajad" ,fontSize:20,fontWeight:'bold'}}>แผนที่ทริป</Typography>
              </CardContent>
            </Card>
          </Paper>  
        </Row>  
      </Container>
      </section>
    </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDf8sqiZUNBWHSQkw3Tqpt5R6LIb4kLdbc',
  language:'th',
  libraries: ["visualization"]
})(MapContainer);

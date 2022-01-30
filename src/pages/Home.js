import React, {Component} from 'react';
import BookList from "../components/BookList";
import Object from "../components/Object";
import useEffect from "../components/Effect";
import Effect from "../components/Effect";
import Axios from "../components/Axios";
import FetchedData from "../components/FetchedData";
import Reducer from "../components/Reducer";
import ToggleComponent from "../components/001-useToggle/ToggleComponent";
import TimeoutComponent from "../components/002-useTimeout/TimeoutComponent";
// import DebounceComponent from "../components/003-useDebounce/DebounceComponent";
import UpdateEffectComponent from "../components/004-useUpdateEffect/UpdateEffectComponent";
import ArrayComponent from "../components/005-useArray/ArrayComponent";
import PreviousComponent from "../components/006-usePrevious/PreviousComponent";


class Home extends Component {
  render() {
    return (
      <div>
       {/*<BookList/>*/}
       {/* <Object/>*/}
       {/* <Effect/>*/}
       {/*<Axios/>*/}
       {/*<FetchedData/>*/}
       {/*<Reducer/>*/}
       {/*<ToggleComponent/>*/}
       {/*<TimeoutComponent/>*/}
       {/*<DebounceComponent/>*/}
       {/*<UpdateEffectComponent/>*/}
       {/*<ArrayComponent/>*/}
       <PreviousComponent/>
      </div>
    );
  }
}

export default Home;
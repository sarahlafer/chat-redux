import { combineReducers } from 'redux';
import MessagesReducer from './messages_reducer';
import SelectedChannelReducer from './selected_channel_reducer';


const rootReducer = combineReducers({
  messages: MessagesReducer,
  selectedChannel: SelectedChannelReducer
});

export default rootReducer;

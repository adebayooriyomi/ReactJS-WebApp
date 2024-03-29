import Moment from 'moment';

export function formatDate(date){
    Moment.locale('en')
    const dat = date;
    const formattedDate = Moment(dat).startOf('hour').fromNow();
    return formattedDate
}

export function truncateSentence(sentence, maxLength) {
  if (sentence.length <= maxLength) {
    return sentence;
  }
  return sentence.slice(0, maxLength) + "...";
} 

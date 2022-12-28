import React from 'react';
import './DiaryCard.scss';

export default function DiaryCard(props) {
  // gets the text from the props
  var entryText = props.text;

  function textSummary(text) {
    // gets the first 30 words of the text
    var summary = text.split(' ').slice(0, 30).join(' ');
    return summary;
  }

  return (
    <div className='diaryCard'>
      <div className='diaryText'>
        <p className='diaryHeader'>Dear Diary,</p>
        <p className='diaryContents'>{textSummary(entryText)}...</p>
        <p className='diaryFooter'>Love,<br/>Anonymous</p>
      </div>
    </div>
  )
}

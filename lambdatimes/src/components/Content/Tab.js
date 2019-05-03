import React from 'react';

const Tab = props => {
  console.log(props)
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

  let createClassName = () => {
    if (props.selectedTab === props.tab) {
      console.log('lkajsdfkljasdf', props.selectedTab)
      return 'tab active-tab'
    }
    else return 'tab'
  }
  
  return (
    <div
      className={createClassName()}
      onClick={(tab) => {
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
        {props.selectTabHandler(tab)}
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;

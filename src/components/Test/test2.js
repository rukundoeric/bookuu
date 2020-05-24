import React from 'react';

export default function test2() {
  return (
    <div
      style={{
        backgroundColor: 'blue',
        height: '100vh',
        display: 'flex',
        margin: 'auto',
      }}
    >
      <div
        style={{
          backgroundColor: 'red',
          width: '700px',
          height: '700px',
          display: 'flex',
          margin: 'auto',
        }}
      >
        div1
        <div
          style={{
            backgroundColor: 'yellow',
            width: '500px',
            height: '500px',
            display: 'flex',
            margin: 'auto',
          }}
        >
          div2
          <div
            style={{
              backgroundColor: 'green',
              width: '400px',
              height: '400px',
              display: 'flex',
              margin: 'auto',
            }}
          >
            div3
            <div
              style={{
                backgroundColor: 'gray',
                width: '200px',
                height: '200px',
              }}
            >
              div4
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

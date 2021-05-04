const mappings = [
  [
    //0
    [
      { big: '90', small: '180' },
      { big: '90', small: '270' },
      { big: '180', small: '270' },
    ],

    [{ big: '0', small: '180' }, {}, { big: '0', small: '180' }],

    [{ big: '0', small: '180' }, {}, { big: '0', small: '180' }],

    [{ big: '0', small: '180' }, {}, { big: '0', small: '180' }],

    [
      { big: '0', small: '90' },
      { big: '90', small: '270' },
      { big: '0', small: '270' },
    ],
  ],
  [
    //1
    [{}, { big: '225', small: '180' }, {}],

    [{ big: '45', small: '90' }, { big: '0', small: '180' }, {}],

    [{}, { big: '0', small: '180' }, {}],

    [{}, { big: '0', small: '180' }, {}],

    [
      { big: '90', small: '0' },
      { big: '90', small: '270' },
      { big: '270', small: '0' },
    ],
  ],
  [
    //2
    [
      { big: '90', small: '180' },
      { big: '90', small: '270' },
      { big: '180', small: '270' },
    ],

    [{ big: '0', small: '90' }, {}, { big: '0', small: '225' }],

    [{}, { big: '45', small: '225' }, {}],

    [{ big: '45', small: '180' }, {}, {}],

    [
      { big: '90', small: '0' },
      { big: '90', small: '270' },
      { big: '270', small: '0' },
    ],
  ],
  [
    //3
    [
      { big: '90', small: '180' },
      { big: '90', small: '270' },
      { big: '180', small: '270' },
    ],

    [{ big: '0', small: '90' }, {}, { big: '0', small: '225' }],

    [{}, { big: '45', small: '135' }, {}],

    [{ big: '180', small: '90' }, {}, { big: '315', small: '180' }],

    [
      { big: '90', small: '0' },
      { big: '90', small: '270' },
      { big: '270', small: '0' },
    ],
  ],
  [
    //4
    [{ big: '0', small: '180' }, {}, { big: '0', small: '180' }],

    [{ big: '0', small: '180' }, {}, { big: '0', small: '180' }],

    [
      { big: '90', small: '0' },
      { big: '90', small: '270' },
      { big: '0', small: '180' },
    ],

    [{}, {}, { big: '0', small: '180' }],

    [{}, {}, { big: '0', small: '180' }],
  ],
  [
    //5
    [
      { big: '90', small: '180' },
      { big: '90', small: '270' },
      { big: '270', small: '180' },
    ],

    [{ big: '0', small: '180' }, {}, {}],

    [
      { big: '90', small: '0' },
      { big: '90', small: '270' },
      { big: '270', small: '180' },
    ],

    [{}, {}, { big: '0', small: '180' }],

    [
      { big: '90', small: '0' },
      { big: '90', small: '270' },
      { big: '0', small: '270' },
    ],
  ],
  [
    //6
    [
      { big: '90', small: '180' },
      { big: '90', small: '270' },
      { big: '270', small: '180' },
    ],

    [{ big: '0', small: '180' }, {}, {}],

    [
      { big: '180', small: '0' },
      { big: '270', small: '90' },
      { big: '180', small: '270' },
    ],

    [{ big: '0', small: '180' }, {}, { big: '0', small: '180' }],

    [
      { big: '90', small: '0' },
      { big: '90', small: '270' },
      { big: '0', small: '270' },
    ],
  ],
  [
    //7
    [
      { big: '90', small: '180' },
      { big: '90', small: '270' },
      { big: '270', small: '180' },
    ],

    [{ big: '0', small: '135' }, {}, { big: '0', small: '180' }],

    [{}, {}, { big: '0', small: '180' }],

    [{}, {}, { big: '0', small: '180' }],

    [{}, {}, { big: '0', small: '180' }],
  ],
  [
    //8
    [
      { big: '90', small: '180' },
      { big: '90', small: '270' },
      { big: '270', small: '180' },
    ],

    [{ big: '0', small: '180' }, {}, { big: '0', small: '180' }],

    [
      { big: '0', small: '180' },
      { big: '270', small: '90' },
      { big: '0', small: '180' },
    ],

    [{ big: '0', small: '180' }, {}, { big: '0', small: '180' }],

    [
      { big: '90', small: '0' },
      { big: '90', small: '270' },
      { big: '0', small: '270' },
    ],
  ],
  [
    //9
    [
      { big: '90', small: '180' },
      { big: '90', small: '270' },
      { big: '270', small: '180' },
    ],

    [{ big: '0', small: '180' }, {}, { big: '0', small: '180' }],

    [
      { big: '0', small: '90' },
      { big: '270', small: '90' },
      { big: '0', small: '180' },
    ],

    [{}, {}, { big: '0', small: '180' }],

    [
      { big: '90', small: '0' },
      { big: '90', small: '270' },
      { big: '0', small: '270' },
    ],
  ],
];

const limit = 10;
const circleRadius = 30;
const marginPercentageBtwnCircles = 1;

document.title = `Count To ${limit}`;
const circle = document.querySelectorAll('.circle');
circle.forEach((element) => {
  element.style.height = `${2 * circleRadius}px`;
  element.style.width = `${2 * circleRadius}px`;
  element.style.marginLeft = `${marginPercentageBtwnCircles}%`;
});

const rotateNeedle = (row, col, whichNeedle, angle) => {
  //console.log(`#circle-${row}${col} .needle-${whichNeedle}`, angle);
  // console.log(
  //   document.querySelector(`#circle-${row}${col} .needle-${whichNeedle}`)
  // );
  if (!angle) {
    document
      .querySelector(`#circle-${row}${col} .needle-${whichNeedle}`)
      .style.setProperty('display', `none`);
  } else {
    document
      .querySelector(`#circle-${row}${col} .needle-${whichNeedle}`)
      .style.setProperty('transform', `rotateZ(${angle}deg)`);
    document
      .querySelector(`#circle-${row}${col} .needle-${whichNeedle}`)
      .style.setProperty('display', `initial`);
  }
};

// rotateNeedle('big', 90);
// rotateNeedle('small', 230);

const showNum = function (num) {
  for (const [i, arr] of mappings[num].entries()) {
    const [c1, c2, c3] = [...arr];
    // console.log(i, c1, c2, c3);
    rotateNeedle(i, 0, 'big', c1?.big);
    rotateNeedle(i, 0, 'small', c1?.small);
    rotateNeedle(i, 1, 'big', c2?.big);
    rotateNeedle(i, 1, 'small', c2?.small);
    rotateNeedle(i, 2, 'big', c3?.big);
    rotateNeedle(i, 2, 'small', c3?.small);
  }
};
// showNum(0);
let number = 0;

const start = () => {
  showNum(number);
  number++;
  stop();
};
let interval = setInterval(start, 2500);
const stop = () => {
  if (number === 10) {
    clearInterval(interval);
  }
};

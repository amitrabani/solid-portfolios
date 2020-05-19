import Theme from '../../../elements/Theme';

export default {
  animationEnabled: true,
  animationDuration: 2000,
  backgroundColor: 'transparent',
  title: {
    text: 'S&P 500',
    fontSize: 25,
    fontColor: 'white',
  },
  axisX: {
    lineThickness: 1,
  },
  axisY: {
    lineThickness: 1,
    gridColor: 'transparent',
  },
  data: [
    {
      type: 'splineArea',
      interactivityEnabled: false,
      lineThickness: 4,
      color: 1 > 0 ? Theme.positiveColor : Theme.negativeColor,
      markerSize: 3,
      markerType: 'circle',
      markerColor: '#0080005e',
      fillOpacity: 1,
      dataPoints: [
        { x: 1, y: 77 },
        { x: 2, y: 8 },
        { x: 3, y: 9 },
        { x: 4, y: 4 },
      ],
    },
  ],
};

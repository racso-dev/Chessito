Chessboard('board', {
  draggable: true,
  position: 'start',
  onDragStart: () => {
    console.log('onDragStart');
  },
  onDrop: () => {
    console.log('onDrop');
  },
  onSnapEnd: () => {
    console.log('onSnapEnd');
  },
  onMoveEnd: () => {
    console.log('onMoveEnd');
  },
});

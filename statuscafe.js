// based on https://status.cafe/current-status.js / https://ctrl-c.club/~gome/js/statuscafe.js
fetch('https://status.cafe/users/trrb/status.json')
.then( r => r.json() )
.then( r => {
  if (!r.content.length) {
    document.getElementById('statuscafe-content').innerHTML = 'No status yet.'
    return
  }
  let statusContainer = document.getElementById('status')
  statusContainer.style.cssText = 'border:1px solid;padding: 8px'
  statusContainer.classList.add('loaded')
  document.getElementById('statuscafe-title').innerHTML = 'My status'
  document.getElementById('statuscafe-username').innerHTML = "<a href='https://status.cafe/users/trrb' target='_blank'>" + r.author + '</a> ' + r.face + ' ' + r.timeAgo
  document.getElementById('statuscafe-content').innerHTML = r.content
})
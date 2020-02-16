// Enable chromereload by uncommenting this line:
// import 'chromereload/devonly'

window.addEventListener("load", Main);

function Main():void {
  let c = 0;
  let event = document.createEvent( 'MouseEvents' );
  setTimeout(() => {
    const top_tweet_label = document.querySelector('[aria-label="トップツイートがオフになります"]');
    const home_tweet_label = document.querySelector('[aria-label="トップツイートがオンになります"]');
    let timeline_change_star = home_tweet_label === null ? top_tweet_label : home_tweet_label;
    event.initEvent("click", true, true);
    if(timeline_change_star !== null){
      timeline_change_star.dispatchEvent(event);
      setTimeout(() => {
        let button_change_timeline_change = document.querySelector('[role="menu"] [role="menuitem"]');
        event.initEvent("click", true, true);
        if(button_change_timeline_change !== null){
          button_change_timeline_change.dispatchEvent(event);
        }
      }, 500);
    }
  }, 4000);
}

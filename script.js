function searchStation() {
  const input = document.getElementById("gymSearch").value.trim();
  if (!input) {
    alert("検索ワードを入力してください。");
    return false;
  }
  // 本来は検索結果ページへ遷移 or 検索処理
  console.log(`検索ワード: ${input}`);
  return true;
}

document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu');
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const opacity = Math.min(scrollTop / 500, 0.7);
    menu.style.setProperty('--overlay-opacity', opacity);
  });

  const sr = ScrollReveal({
    reset: true,
    easing: 'ease-in-out',
    viewOffset: { top: 50, right: 0, bottom: 0, left: 0 }
  });

  function getConfig() {
    const width = window.innerWidth;
    if (width <= 768) return { distance: '15px', duration: 600, interval: 50 };
    if (width <= 1024) return { distance: '20px', duration: 650, interval: 60 };
    return { distance: '25px', duration: 700, interval: 70 };
  }

  function applyReveal(config) {
    const revealSelectors = [
      '#pricing',
      '#pricing .campaign',
      '#pricing .plan',
      '#pricing .ticket-note',
      '#pricing .more-block',
      '.story_1',
      '.story_2',
      '.story_3'
    ];

    revealSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        sr.reveal(el, {
          origin: 'bottom',
          distance: config.distance,
          duration: config.duration,
          interval: config.interval
        });
      });
    });
  }

  let config = getConfig();
  applyReveal(config);

  window.addEventListener('resize', () => {
    config = getConfig();
    sr.destroy();
    applyReveal(config);
  });
});



let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'CG_a1c6Je8c',
    playerVars: {
      autoplay: 1,
      mute: 1,
      loop: 1,
      playlist: 'CG_a1c6Je8c',
      controls: 0,
      modestbranding: 1,
      rel: 0
    },
    events: {
      onReady: (event) => {
        event.target.mute();
        event.target.playVideo();
      },
      onStateChange: (event) => {
        if (event.data === YT.PlayerState.ENDED) {
          event.target.playVideo();
        }
      }
    }
  });
}

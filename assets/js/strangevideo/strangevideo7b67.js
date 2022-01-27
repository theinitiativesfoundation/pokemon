$(window).on('load', function () {
  
  /* --- chat --- */
  var cnt = 1;
  var dispComp = false;
  var dispDelay;
  var showChat = function() {
    if( $('.chat-items li').length >= cnt) {
		  $('.chat-items li:nth-child('+cnt+')').addClass('show');
      dispDelay = $('.chat-items li:nth-child('+(cnt+1)+')').attr('data-delay');
      if(!dispDelay) dispDelay = 1000;
      setTimeout(showChat, dispDelay);
      scrollToEnd();
      //if($('.chat-items-frame').height() < $('.chat-items-inner').height()) {
      //  $('.scroll-chat-top').fadeIn('300');
      //}
      if( $('.chat-items li').length == cnt) {
        $('.scroll-chat-top').fadeIn('300');
        dispComp = true;
      }
    }
    cnt++;
  }
  showChat();
  
  function scrollToEnd() {
    var messagesArea = document.getElementById('scroll-inner');
    messagesArea.scrollTop = messagesArea.scrollHeight;
  }
  
  $('.scroll-chat-top').on('click', function() {
    $('#scroll-inner').animate({scrollTop:0},300);
    return false;
  });
  
  $('#scroll-inner').scroll(function() {
    if(dispComp && $('#scroll-inner').scrollTop() == 0) {
      $('.scroll-chat-top').fadeOut('300');
    } if(dispComp && $('#scroll-inner').scrollTop() > 0) {
      $('.scroll-chat-top').fadeIn('300');
    }
  });
    
  /* --- modal & youtube --- */

  var ytId;
  var ytPlayer;
  var scroll_disable = function (event) {
    event.preventDefault();
  };
  //var scroll_events = ['wheel', 'touchmove'];

  $('.js-modal-movie').on('click', function() {
      ytId = $(this).attr('data-id');
      $('#youtube-modal').addClass('is-open');
      remakePlayer();
      document.addEventListener('wheel', scroll_disable, { passive: false });
      document.addEventListener('touchmove', scroll_disable, { passive: false });
      $('#youtube-modal').attr('aria-hidden', 'false');
      return false;
  });
  $('#youtube-modal, #youtube-modal-close').on('click', function() {
      $('#youtube-modal').removeClass('is-open');
      document.removeEventListener('wheel', scroll_disable, { passive: false });
      document.removeEventListener('touchmove', scroll_disable, { passive: false });
      $('#youtube-modal').attr('aria-hidden', 'true');
      removePlayer();
      return false;
  });

  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  //var isYtReady = false;
  var isYtReady = true;
  var ytReadyCallback = function(){};
  window.onYouTubeIframeAPIReady = function() {
      isYtReady = true;
      ytReadyCallback.apply();
  };

  function removePlayer() {
      if(!isYtReady) {
          ytReadyCallback = function(){};
      }
      ytPlayer.destroy();
  }
  function remakePlayer() {
      if(!isYtReady) {
          ytReadyCallback = remakePlayer;
          return;
      }
      ytPlayer = new YT.Player("youtube-modal-player",{
          width: 960,
          height: 540,
          videoId: ytId,
          playerVars: {
              //loop: 1,
              //playlist: ytId,
              rel: 0
          },
          events: {
              'onReady': onPlayerReady
          }
      });
  }
  function onPlayerReady(event) {
      event.target.playVideo();
  }
  
    
  /* --- modal & image --- */

  $('.js-modal-image').on('click', function() {
      var imgSrc = $(this).attr('href');
      console.log(imgSrc);
      $('#image-modal').find('.image-modal-container').find('img').attr('src', imgSrc);
      $('#image-modal').addClass('is-open');
      document.addEventListener('wheel', scroll_disable, { passive: false });
      document.addEventListener('touchmove', scroll_disable, { passive: false });
      $('#image-modal').attr('aria-hidden', 'false');
      return false;
  });
  $('#image-modal, #image-modal-close').on('click', function() {
      $('#image-modal').removeClass('is-open');
      document.removeEventListener('wheel', scroll_disable, { passive: false });
      document.removeEventListener('touchmove', scroll_disable, { passive: false });
      $('#image-modal').attr('aria-hidden', 'true');
      return false;
  });
  

});
/**
 *
 * @param autoSwitchMilliSeconds
 */
const runCarouselSlider = ({
  element,
  autoSwitchMilliSeconds,
  slidesPerViewDesktop,
}) => {
  function navigation(slider) {
    let wrapper;
    let dots;
    let timeout;
    let mouseOver = false;

    function removeElement(element) {
      element.parentNode.removeChild(element);
    }

    function markup(remove) {
      wrapperMarkup(remove);
      dotMarkup(remove);
    }

    function createDiv(className) {
      var div = document.createElement('div');
      var classNames = className.split(' ');
      classNames.forEach((name) => div.classList.add(name));
      return div;
    }

    function wrapperMarkup(remove) {
      if (remove) {
        var parent = wrapper.parentNode;
        while (wrapper.firstChild)
          parent.insertBefore(wrapper.firstChild, wrapper);
        removeElement(wrapper);
        return;
      }
      wrapper = createDiv('navigation-wrapper');
      slider.container.parentNode.appendChild(wrapper);
      wrapper.appendChild(slider.container);
    }

    function dotMarkup(remove) {
      if (remove) {
        removeElement(dots);
        return;
      }
      dots = createDiv('dots');
      slider.track.details.slides.forEach((_e, idx) => {
        var dot = createDiv('dot');
        dot.addEventListener('click', () => slider.moveToIdx(idx));
        dots.appendChild(dot);
      });
      wrapper.appendChild(dots);
    }

    function updateClasses() {
      var slide = slider.track.details.rel;
      Array.from(dots.children).forEach(function (dot, idx) {
        idx === slide
          ? dot.classList.add('dot-active')
          : dot.classList.remove('dot-active');
      });
    }

    function clearNextTimeout() {
      clearTimeout(timeout);
    }

    function nextTimeout() {
      clearTimeout(timeout);
      if (mouseOver) {
        return;
      }
      timeout = setTimeout(() => {
        slider.next();
      }, autoSwitchMilliSeconds);
    }

    slider.on('animationEnded', nextTimeout);
    slider.on('updated', nextTimeout);

    slider.on('created', () => {
      markup();
      updateClasses();

      slider.container.addEventListener('mouseover', () => {
        mouseOver = true;
        clearNextTimeout();
      });
      slider.container.addEventListener('mouseout', () => {
        mouseOver = false;
        nextTimeout();
      });
      nextTimeout();
    });
    slider.on('optionsChanged', () => {
      markup(true);
      markup();
      updateClasses();
    });
    slider.on('slideChanged', () => {
      updateClasses();
    });
    slider.on('destroyed', () => {
      markup(true);
    });
  }

  const spacing = 24;

  new KeenSlider(
    element,
    {
      loop: true,
      slides: {
        perView: 1,
        spacing,
      },
      breakpoints: {
        // This value should match with $break-point-mobile-desktop in main.scss.
        '(min-width: 769px)': {
          slides: { perView: slidesPerViewDesktop, spacing },
        },
      },
    },
    [navigation]
  );
};

runCarouselSlider({
  element: '#ascender-carousel-slider',
  autoSwitchMilliSeconds: 10000,
  slidesPerViewDesktop: 1,
});

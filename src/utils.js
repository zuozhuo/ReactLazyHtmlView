import {BLANK_IMAGE_DATA_URI, LAZY_IMAGE_CLASS_NAME} from './consts';
// import lazyLoadClassNames from './styles.module.scss';


function getElementPosition(element) {
    const rect = element.getBoundingClientRect();

    return {
        top: rect.top + window.pageYOffset,
        left: rect.left + window.pageXOffset,
    };
}

function isElementHidden(element) {
    return element.offsetParent === null;
}

const DEFAULT_OFFSET = {top: 0, right: 0, bottom: 0, left: 0};
function isElementInViewport(element, container, customOffset = DEFAULT_OFFSET) {
    if (isElementHidden(element)) {
        return false;
    }

    let top;
    let bottom;
    let left;
    let right;

    if (typeof container === 'undefined' || container === window) {
        top = window.pageYOffset;
        left = window.pageXOffset;
        bottom = top + window.innerHeight;
        right = left + window.innerWidth;
    } else {
        const containerPosition = getElementPosition(container);

        top = containerPosition.top;
        left = containerPosition.left;
        bottom = top + container.offsetHeight;
        right = left + container.offsetWidth;
    }

    const elementPosition = getElementPosition(element);

    return (
        top <= elementPosition.top + element.offsetHeight + customOffset.top &&
        bottom >= elementPosition.top - customOffset.bottom &&
        left <= elementPosition.left + element.offsetWidth + customOffset.left &&
        right >= elementPosition.left - customOffset.right
    );
}


const DEFAULT_CONVERT_OPTIONS = {
    defaultSrc: BLANK_IMAGE_DATA_URI,
    lazyClassName: LAZY_IMAGE_CLASS_NAME,
};
function convertToLazyHtml(html, options = {}) {
    const _options = {...DEFAULT_CONVERT_OPTIONS, ...options};

    const domParser = new DOMParser();
    const xmlSerializer = new XMLSerializer();

    const _document = domParser.parseFromString(html, 'text/html');

    if (_document && _document.querySelectorAll) {
        const _allImgs = _document.querySelectorAll('img');
        Array.from(_allImgs).forEach((i) => {
            // eslint-disable-next-line no-param-reassign
            i.dataset.src = i.src;
            // eslint-disable-next-line no-param-reassign
            i.src = _options.defaultSrc;
            i.classList.add(_options.lazyClassName);
            // i.classList.add(lazyLoadClassNames['reactLazyImg']);
        });
        return xmlSerializer.serializeToString(_document);
    }
    return html;
}


// 如果图片宽度超过了容器宽度，那么重新等比例计算新的高宽设置到图片上
function adjustImageWidth(container, image) {
    // this.options.scope.offsetWidth
    if (!container || !image) {
        return;
    }
    const containerWidth = container.offsetWidth;
    const imageStyleWidth = parseFloat(image.style.width);
    const imageStyleHeight = parseFloat(image.style.height);
    if (!imageStyleWidth || !imageStyleHeight) {
        return;
    }

    // 如果图片比容器宽，那么这里按比例纠正图片高度
    if (imageStyleWidth > containerWidth) {
        const newHeight = (imageStyleHeight / imageStyleWidth) * containerWidth;
        image.style.width = containerWidth + 'px';
        image.style.height = parseInt(newHeight, 10) + 'px';
    }
}


export {
    getElementPosition,
    isElementHidden,
    isElementInViewport,
    convertToLazyHtml,
    adjustImageWidth,
};


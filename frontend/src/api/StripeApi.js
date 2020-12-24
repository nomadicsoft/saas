export default {
    includeStripe(callback) {
        const URL = 'js.stripe.com/v3/'
        let documentTag = document, tag = 'script',
            object = documentTag.createElement(tag),
            scriptTag = documentTag.getElementsByTagName(tag)[0];
        object.src = '//' + URL;
        if (callback) {
            object.addEventListener('load', function (e) {
                callback(null, e);
            }, false);
        }
        scriptTag.parentNode.insertBefore(object, scriptTag);
    }
}

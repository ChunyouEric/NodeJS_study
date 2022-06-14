import _ from 'lodash';
/**
 * func - create div component
 */
function divComp() {
    var eleDiv = document.createElement('div');
    // TODO: use Lodash '_' to join string.
    eleDiv.innerHTML = _.join(['Hell', 'Webpack', '&', 'NodeJS', '!'], ' ');
    // TODO: return element div
    return eleDiv;
}
// TODO: append div to body
document.body.appendChild(divComp());
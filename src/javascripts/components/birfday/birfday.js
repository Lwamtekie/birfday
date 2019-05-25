import util from '../../helpers/util';
import birfdayData from '../../helpers/data/birfdayData';

const birfdayStringBuilder = (uid) => {
  birfdayData.getBirfdayByUid(uid).then((birthday) => {
    let domString = `<h1>${birthday.date}</h1>`;
    domString += `<img src=${birthday.imageUrl} alt="birthday location"/>`;
    domString += `${birthday.location} @ ${birthday.time}</h2>`;
    util.printToDom('event', domString);
  }).catch(err => console.error('could not get birfday', err));
};
export default { birfdayStringBuilder };

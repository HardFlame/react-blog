function getPrettyTime (time: string | number) {
    const aLongTimeAgo = 60*60*24*14
    if ((new Date().valueOf() - +time) > aLongTimeAgo) {
        return new Date(time).toLocaleString("en-US",{//TODO it will be possible to add ru-RU when the translation of getTimeSince() is done
            weekday: "short",
            year: "numeric",
            month: "long",
            day: "numeric",
        })
    } else {
        // console.log('why',+time > aLongTimeAgo)
        return getTimeSince(time)
    }
}

function getTimeSince(time: string | number) {
    const seconds = Math.floor((+new Date() - +time) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) {
        return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}

export {getPrettyTime,getTimeSince}
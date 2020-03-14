function getSearchParams(s) {
    // e.g. https://www.youtube.com/watch?v=v17NIByfvvs&feature=emb_logo
    let i = 0;  // index
    let j = 0;  // index start of name
    let k = 0;  // index start of value
    const params = {};
    let name = null;
    while (i < s.length) {
        const ch = s[i];
        if (ch === '?' || ch === '&') {
            if (k > 0) {params[name] = s.substring(k, i);}
            i++; j = i; k = 0;
        }
        else if (ch === '=') {
            name = s.substring(j, i);
            i++; k = i;
        }
        else { i++; }
    }
    if (k > 0) {params[name] = s.substring(k, i);}
    return params;
}

// function test() {
//     const s = 'https://www.youtube.com/watch?v=v17NIByfvvs&feature=emb_logo';
//     console.log(getSearchParams(s));
// }
// test();

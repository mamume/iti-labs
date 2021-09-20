$(() => {
    const list1 = $('#list1')
    const list2 = $('#list2')
    const manu1 = $('#manu1')
    const manu2 = $('#manu2')

    list1.click(() => {
        manu1.toggleClass("show")
        manu2.removeClass("show")
    })

    manu1.click((e) => {
        if (e.target.id === 'list2')
            manu2.toggleClass("show")
        else {
            manu2.removeClass("show")
            manu1.removeClass("show")
        }
    })

    manu2.click(() => {
        manu2.removeClass("show")
        manu1.removeClass("show")
    })
})
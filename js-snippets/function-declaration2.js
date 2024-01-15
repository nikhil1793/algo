function parent(){
    console.log('parent', this);

    function child(){
        console.log('child', this);
    }

    return child;
}

parent()();


const renderHome = (req, res) => {
    res.render('home', {
        layout: false,
        title: 'Welcome to the Food Planner'
    });
};

module.exports = {
    renderHome
};

exports.pageNotFound = (req, res, next)=>{
    // res.status(404).sendFile(path.join(rootDir, 'views', 'page-not-found.html'));
    res.status(404).render('page-not-found', {pageTitle: 'Page Not Found', path: ''});
}
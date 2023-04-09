import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Article from '../img/article.png'
// import Video from '../img/video.png'
// import Photo from '../img/.png'
import '../Upload/Upload.css'

function WithHeaderExample() {
  return (
    <div className='upload mt-2'> 
      <div className="col-12 uploadTitle">
      Share your article, photos, video or idea
      </div>
      <div className="col-12  uploadHere">

      </div>
      <hr className='line' />
      <div className="col-12 pb-2 d-flex justify-content-between">
        <div className="col-6 d-flex justify-content-evenly">

      <Button className='uploadbtn' variant="primary">Photo</Button>
        <Button className='uploadbtn' variant="primary">Video</Button>
        <Button className='uploadbtn' variant="primary">Write an article</Button>
        </div>
        <div className="col-6 mr-3 d-flex justify-content-end">

        <Button className='postbtn' variant="primary">Post</Button>
        </div>
      </div>
       
      
    </div>
  );
}

export default WithHeaderExample;
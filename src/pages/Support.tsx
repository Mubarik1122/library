import React from 'react';
import { HelpCircle, MessageSquare, FileText, Video } from 'lucide-react';

const Support: React.FC = () => {
  return (
    <div className="support-container fade-in">
      <h1 className="mb-4">Support Center</h1>
      
      <div className="row mb-4">
        <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
          <div className="card text-center h-100">
            <div className="card-body d-flex flex-column">
              <HelpCircle size={40} className="text-primary mx-auto mb-3" />
              <h5 className="card-title">FAQ</h5>
              <p className="card-text flex-grow-1">Find answers to commonly asked questions about using Libib.</p>
              <button className="btn btn-outline-primary mt-auto">View FAQs</button>
            </div>
          </div>
        </div>
        
        <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
          <div className="card text-center h-100">
            <div className="card-body d-flex flex-column">
              <MessageSquare size={40} className="text-success mx-auto mb-3" />
              <h5 className="card-title">Contact Us</h5>
              <p className="card-text flex-grow-1">Get in touch with our support team for personalized help.</p>
              <button className="btn btn-outline-success mt-auto">Contact Support</button>
            </div>
          </div>
        </div>
        
        <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
          <div className="card text-center h-100">
            <div className="card-body d-flex flex-column">
              <FileText size={40} className="text-info mx-auto mb-3" />
              <h5 className="card-title">User Guide</h5>
              <p className="card-text flex-grow-1">Comprehensive documentation to help you use Libib effectively.</p>
              <button className="btn btn-outline-info mt-auto">Read Guide</button>
            </div>
          </div>
        </div>
        
        <div className="col-md-6 col-lg-3">
          <div className="card text-center h-100">
            <div className="card-body d-flex flex-column">
              <Video size={40} className="text-warning mx-auto mb-3" />
              <h5 className="card-title">Video Tutorials</h5>
              <p className="card-text flex-grow-1">Watch tutorials on how to use the various features of Libib.</p>
              <button className="btn btn-outline-warning mt-auto">Watch Tutorials</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row">
        <div className="col-lg-8">
          <div className="card mb-4">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">Frequently Asked Questions</h5>
            </div>
            <div className="card-body">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      How do I add books to my library?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      You can add books to your library by navigating to the "Add Items" page. From there, you can search for books by title, author, or ISBN. You can also scan barcodes, upload a CSV file, or add books manually.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      How do I create a collection?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      To create a collection, go to the "Add Collection" page. Enter a name for your collection, add an optional description and tags, and click "Create Collection." Once created, you can add books to this collection.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Can I share my library with others?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes, you can share your collections with others by going to the "Publish" page. You can make collections public, which allows anyone with the link to view them, or keep them private for your eyes only.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4">
          <div className="card">
            <div className="card-header bg-secondary text-white">
              <h5 className="mb-0">Contact Information</h5>
            </div>
            <div className="card-body">
              <p><strong>Email:</strong> <a href="mailto:support@libib.com">support@libib.com</a></p>
              <p><strong>Support Hours:</strong> Monday - Friday, 9 AM - 5 PM EST</p>
              <p><strong>Response Time:</strong> Within 24 hours</p>
              
              <div className="mt-4">
                <h6>Send us a Message</h6>
                <form>
                  <div className="mb-3">
                    <label htmlFor="supportSubject" className="form-label">Subject</label>
                    <input type="text" className="form-control" id="supportSubject" placeholder="e.g., Account Question" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="supportMessage" className="form-label">Message</label>
                    <textarea className="form-control" id="supportMessage" rows={4} placeholder="Describe your issue or question..."></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
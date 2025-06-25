import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './EventDetail.css';
import { ArrowLeft } from 'lucide-react';

const EventDetail = () => {
  const { state } = useLocation();
  const event = state?.event;

  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || text.trim() === '') return;

    const newComment = {
      id: Date.now(),
      name,
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setComments([newComment, ...comments]);
    setName('');
    setText('');
  };

  const goBack = () => {
    window.history.back();
  };

  if (!event) return <p>Event nicht gefunden.</p>;

  return (
   
    <div className="event-detail-wrapper">
      {/* Zurück-Button */}
      <button onClick={goBack} className="back-button">
        <ArrowLeft size={20} className="back-button-icon" />
        Zurück
      </button>

      <div className="event-detail-container">
        {/* Image Left */}
        <div className="events-image">
          <img src={event.image} alt={event.title} />
        </div>

        {/* Info Right */}
        <div className="event-info">
          <h1>{event.title}</h1>
          <p><strong>📅 Datum:</strong> {event.date}</p>
          <p><strong>📍 Ort:</strong> {event.location}</p>
          <p className="event-description">{event.description}</p>
          <button className="register-button">Ich will teilnehmen!</button>
        </div>
      </div>

      {/* Kommentar-Bereich */}
      <form className="comment-form" onSubmit={handleSubmit}>
  <div className="comment-name-wrapper">
    <div className="comment-avatar">
      {name ? name.charAt(0).toUpperCase() : "?"}
    </div>
    <input
      type="text"
      className="comment-name"
      placeholder="Dein Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  </div>
  <textarea
    className="comment-text"
    placeholder="Dein Kommentar"
    value={text}
    onChange={(e) => setText(e.target.value)}
  />
  <button type="submit" className="comment-submit">Kommentieren</button>
</form>

      <div className="comment-list">
        {comments.length === 0 ? (
          <p className="no-comments">Noch keine Kommentare.</p>
        ) : (
          comments.map((c) => (
            <div key={c.id} className="comment-item">
              <div className="comment-avatar">
                {c.name ? c.name.charAt(0).toUpperCase() : "?"}
              </div>
              <div className="comment-content">
                <div className="comment-meta">
                  <span className="comment-author">{c.name}</span>
                  <span className="comment-time">{c.time}</span>
                  <button
                    className="comment-delete"
                    onClick={() => setComments(comments.filter(comment => comment.id !== c.id))}
                    title="Kommentar löschen"
                  >
                    🗑️
                  </button>
                </div>
                <p className="comment-text-display">{c.text}</p>
              </div>
            </div>
          ))
        )}
      
        </div>
        {/* inspiresätze */}
        <div className="event-bottom-inspire">
  <p className="inspire-quote">„Gemeinsam gestalten wir unsere Nachbarschaft – sei dabei!“</p>
  <div className="community-note">
       <p>Möchtest du über neue Events informiert bleiben? Trage dich in unseren Newsletter ein!</p>
  <input className='Newsletter' type="email" placeholder="Deine E-Mail" />
  <button>Anmelden</button>
  </div>
</div>
        </div>
        
  );
};

export default EventDetail;

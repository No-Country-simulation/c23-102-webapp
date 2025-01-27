from app.models import db, Base

def init_db():
    Base.metadata.create_all(db.engine)
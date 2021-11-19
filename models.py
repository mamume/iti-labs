from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()


class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(256), nullable=False)
    description = db.Column(db.Text)
    priority = db.Column(db.Integer)
    completed = db.Column(db.Boolean)
    created_at = db.Column(db.DateTime)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.created_at = datetime.now()

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

from app import db

class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    customer_name = db.Column(db.String(100), nullable=False)
    message = db.Column(db.String(500), nullable=False)
    status = db.Column(db.String(20), default='pending') 
    response = db.Column(db.String(500), nullable=True)
db.create_all()

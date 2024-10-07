from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Database configuration (use SQLite for simplicity)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///messages.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Define the Message model
class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    customer_name = db.Column(db.String(100), nullable=False)
    message = db.Column(db.Text, nullable=False)
    status = db.Column(db.String(50), default='pending')
    response = db.Column(db.Text, nullable=True)

# Create the database
with app.app_context():
    db.create_all()

# API endpoint to create a new message
@app.route('/api/messages', methods=['POST'])
def create_message():
    data = request.get_json()
    new_message = Message(customer_name=data['customer_name'], message=data['message'])
    db.session.add(new_message)
    db.session.commit()
    return jsonify({'message': 'Message created!'}), 201

# API endpoint to get all messages
@app.route('/api/messages', methods=['GET'])
def get_messages():
    messages = Message.query.all()
    messages_list = [{'id': msg.id, 'customer_name': msg.customer_name, 'message': msg.message, 'status': msg.status} for msg in messages]
    return jsonify(messages_list)

if __name__ == '__main__':
    app.run(debug=True)

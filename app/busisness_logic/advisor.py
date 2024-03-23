from .user import User
from .turn import Turn

from datetime import timedelta


class Advisor(User):
    def __init__(self, id, name):
        super().__init__(id, name)
        self.state: str = "desconectado"
        self.lost_turn: Turn = None
        self.active_turn: Turn = None
        self.time: timedelta = None



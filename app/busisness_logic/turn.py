from datetime import datetime, timedelta


class Turn:
    def __init__(self) -> None:
        self.id: str
        self.client_id: int
        self.advisor_id: int
        self.date: datetime
        self.stage: str
        self.duration: timedelta
        self.category: str

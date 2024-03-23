from .user import User


class Client(User):
    def __init__(self, id, name, category):
        super().__init__(id, name)
        self.category: bool # true if good_people, false if normal_client


    def get_info(self):
        return {
            "id": self.id,
            "name": self.name,
            "category": self.category,
        }


class good_people(Client):
    def __init__(self, id, name):
        super().__init__(id, name, category=True)


class normal_client(Client):
    def __init__(self, id):
        super().__init__(id, name=id, category=False)

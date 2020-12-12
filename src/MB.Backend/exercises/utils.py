from users.serializers import UserPointSerializer


def add_point(user):
    points = user.points
    points += 1
    serializer = UserPointSerializer(user, data={"points": points})
    if serializer.is_valid():
        serializer.save()
    print(serializer.errors)

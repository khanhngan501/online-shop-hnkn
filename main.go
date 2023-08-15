package main

import (
	"fmt"
	models "online-shop-hnkn/models"
)

func main() {
	user := models.User{
		Name: "hnkn",
		Password: "1234",
	}
	fmt.Print("Hello ", user)
}
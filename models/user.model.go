package models

import "github.com/gofrs/uuid"

type User struct {
	ID uuid.UUID `json:"id"`
	Name string  `json:"name"`
	Email string `json:"email"`
	Password string `json:"password"`
}
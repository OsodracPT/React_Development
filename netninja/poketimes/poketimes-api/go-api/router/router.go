package router

import (
	"../middleware"
	"github.com/gorilla/mux"
)

// Router is exported and used in main.go
func Router() *mux.Router {

	router := mux.NewRouter()

	router.HandleFunc("/api/posts", middleware.GetAllPost).Methods("GET", "OPTIONS")
	router.HandleFunc("/api/posts", middleware.CreatePost).Methods("POST", "OPTIONS")
	router.HandleFunc("/api/posts/{id}", middleware.GetPost).Methods("GET", "OPTIONS")
	router.HandleFunc("/api/posts/{id}", middleware.PostComplete).Methods("PUT", "OPTIONS")
	router.HandleFunc("/api/undoPost/{id}", middleware.UndoPost).Methods("PUT", "OPTIONS")
	router.HandleFunc("/api/deletePost/{id}", middleware.DeletePost).Methods("DELETE", "OPTIONS")
	router.HandleFunc("/api/deleteAllPost", middleware.DeleteAllPost).Methods("DELETE", "OPTIONS")
	return router
}
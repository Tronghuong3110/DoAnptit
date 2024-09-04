package com.doantotnghiepptit.GiaoLuuCauLong.model.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Data;

import java.sql.Date;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Table(name = "user")
@Entity
public class User {
    @Id
    private Long id;
    private String fullName;
    private String username;
    private String password;
    private String phoneNumber;
    private Date birthday;
    private LocalDateTime createAt;
    private LocalDateTime modifiedAt;
    private Boolean deleted;

    @ManyToMany(mappedBy = "users")
    List<ChatRoom> chatRoomList;

    @ManyToMany(mappedBy = "users")
    private List<Notification> notifications;

    @ManyToMany(mappedBy = "users")
    List<Role> roles;
}
